import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import React from 'react';

// Function to read HTML file and return its content
const getPrivacyPolicyContent = (filePath) => {
    const fullPath = path.join(process.cwd(), filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    return content;
};

export default function PrivacyPolicyPage() {
    const router = useRouter();
    const { policy } = router.query;
    const privacyPolicyContent = policy ? getPrivacyPolicyContent(`${policy}`) : null;

    return (
        <div>
            {privacyPolicyContent ? (
                <div>
                    <h1>Privacy Policy</h1>
                    <div dangerouslySetInnerHTML={{ __html: privacyPolicyContent }} />
                </div>
            ) : (
                <p>Privacy Policy not found</p>
            )}
        </div>
    );
}
