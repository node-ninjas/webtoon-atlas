import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export const ClerkLogin = () => {
    return (
        <>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>    
        </>
    )
}