/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : "dezvolta.in" 
            },
            {
                protocol : 'https',
                hostname : "api.casagrandperch.co.in"
            }
        ]
    }
};


export default nextConfig;
