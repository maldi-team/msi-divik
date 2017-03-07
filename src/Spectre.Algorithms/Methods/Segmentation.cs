﻿/*
 * SegmentationTests.cs
 * Contains .NET interface for DiviK algorithm.
 * 
   Copyright 2017 Wilgierz Wojciech, Michal Gallus, Grzegorz Mrukwa

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
using System;
using Spectre.Algorithms.Parameterization;
using Spectre.Algorithms.Results;

namespace Spectre.Algorithms.Methods
{
	public class Segmentation: IDisposable
	{
		#region Fields
		private readonly MatlabAlgorithmsNative.Segmentation _segmentation;

		/// <summary>
		/// Indicates whether this instance has been disposed.
		/// </summary>
		private bool _disposed = false;
		#endregion

		#region Constructor
		/// <summary>
		/// Initializes a new instance of the <see cref="Algorithms"/> class.
		/// </summary>
		public Segmentation()
		{
			_segmentation = new MatlabAlgorithmsNative.Segmentation();
		}
		#endregion

		#region MATLAB calls
		/// <summary>
		/// Performs DiviK clustering on the specified data.
		/// </summary>
		/// <param name="data">The data.</param>
		/// <param name="coordinates">Spatial coordinates.</param>
		/// <param name="options">Configuration.</param>
		/// <returns>Segmentation result.</returns>
		/// <exception cref="System.ObjectDisposedException">thrown if this object has been disposed.</exception>
		public DivikResult Divik(double[,] data, int[,] coordinates, DivikOptions options)
		{
			ValidateDispose();
			//this is needed to not to make MCR go wild
			const int numberOfOutputArgs = 2;
			double[,] coords = new double[coordinates.GetLength(0), coordinates.GetLength(1)];
			for (int i = 0; i < coordinates.GetLength(0); ++i)
				for (int j = 0; j < coordinates.GetLength(1); ++j)
					coords[i, j] = coordinates[i, j];

			var varargin = options.ToVarargin();
			var tmp = _segmentation.divik(numberOfOutputArgs, data, coordinates, varargin);
			var result = new DivikResult(tmp);
			return result;
		}
		#endregion

		#region IDisposable
		/// <summary>
		/// Validates the dispose state. If this instance has been disposed, throws an exception.
		/// </summary>
		/// <exception cref="System.ObjectDisposedException">thrown if this object has been disposed.</exception>
		private void ValidateDispose()
		{
			if (this._disposed)
			{
				throw new ObjectDisposedException(nameof(Algorithms));
			}
		}

		/// <summary>
		/// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
		/// </summary>
		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

		/// <summary>
		/// Releases unmanaged and - optionally - managed resources.
		/// </summary>
		/// <param name="disposing"><c>true</c> to release both managed and unmanaged resources; <c>false</c> to release only unmanaged resources.</param>
		protected virtual void Dispose(bool disposing)
		{
			if (!this._disposed)
			{
				if (disposing)
				{
					this._segmentation.Dispose();
				}
				_disposed = true;
			}
		}

		/// <summary>
		/// Finalizes an instance of the <see cref="Algorithms"/> class.
		/// </summary>
		~Segmentation()
		{
			Dispose(false);
		}
		#endregion
	}
}
