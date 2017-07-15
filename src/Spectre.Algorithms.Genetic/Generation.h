﻿#pragma once

public class Generation
{
public:
	Generation(long size, long indSize);
	Generation(long size, long indSize, long amount);
	Generation(long size, long indSize, long amountFrom, long amountTo);
	~Generation();

private:
	long size;
	vector<Individual>* specimen;
};