'use client';

import {useState, useEffect} from 'react';
import {getProviders, signIn} from 'next-auth/react';

type Provider = {
	id: string;
	name: string;
	type: string;
	singinUrl: string;
	callbackUrl: string;
	signinUrlParams: Record<string, string> | null;
};

const AuthProviders = () => {
	const [providers, setProviders] = useState<Provider | null>(null);

	return <div>AuthProviders</div>;
};

export default AuthProviders;
