﻿#pragma once

public class Individual
{
public:
	Individual(long size);
	Individual(long size, long amount);
	Individual(long size, long amountFrom, long amountTo);
	~Individual();

private:
	long size;
	vector<bool>* spectres;
};