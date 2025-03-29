import React from "react";

const Privacy = () => {
    return (
        <div className="privacy-section-container">
            <div className="privacy-section-text-container">
                <h1 className="primary-heading-privacy">
                    Our Privacy Policy
                </h1>
                <p className="primary-text-privacy-headers">
                    1. Introduction
                </p>
                <p className="primary-text-privacy">
                    Welcome to Know Your Trips, a travel application designed to help you organize your trips and provide real-time travel information. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and share your data when you use our app.
                </p>
                <p className="primary-text-privacy-headers">
                    2. Information We Collect
                </p>
                <p className="primary-text-privacy">
                    We collect the following types of information to provide and improve our services:
                    <br />
                    <br />
                    <strong>Account Information:</strong> When you create an account, we collect information such as your email address, and profile picture.
                    <br />
                    <strong>Location Information:</strong> To provide location-based services, such as nearby attractions and navigation, we may collect your precise GPS location, IP address, and Wi-Fi network information.
                    <br />
                    <strong>Travel Information:</strong> We collect data related to your travel plans, including destinations, booking details, travel dates, preferences, reviews, and ratings.
                    <br />
                    <strong>Usage Information:</strong> We collect data about how you interact with our app, such as pages visited, features used, search queries, and interactions with other users.
                    <br />
                    <strong>Device Information:</strong> We collect information about your device, including device type, operating system, and unique device identifiers.
                    <br />
                    <strong>Payment Information:</strong> If you make bookings or purchases through our app, we collect payment information. This information is processed by secure third-party payment gateways and is not stored directly by us.
                    <br />
                    <strong>Communication Information:</strong> If you contact us or interact with other users through our app, we may collect records of those communications.
                    <br />
                    <strong>Cookies and Similar Technologies:</strong> We may use cookies and similar technologies to enhance your experience and collect usage data.
                </p>
                <p className="primary-text-privacy-headers">
                    3. How We Use Your Information
                </p>
                <p className="primary-text-privacy">
                    We use your information for the following purposes:
                    <br />
                    <br />
                    <ul>
                        <li>To provide and improve our services, including personalized recommendations, booking management, and customer support.</li>
                        <li>To personalize your experience and provide relevant content.</li>
                        <li>To communicate with you about your account, bookings, and updates.</li>
                        <li>To analyze usage patterns and improve our app's functionality.</li>
                        <li>To detect and prevent fraud and security risks.</li>
                        <li>To comply with legal obligations.</li>
                        <li>To provide location-based services.</li>
                        <li>To provide targeted advertising (where applicable, with user consent where required by law).</li>
                    </ul>
                </p>
                <p className="primary-text-privacy-headers">
                    4. Sharing Your Information
                </p>
                <p className="primary-text-privacy">
                    We may share your information with:
                    <br />
                    <br />
                    <strong>Service Providers:</strong> Third-party providers who assist us with services such as payment processing, hosting, analytics, and customer support.
                    <br />
                    <strong>Travel Partners:</strong> Hotels, airlines, and other travel providers to facilitate your bookings.
                    <br />
                    <strong>Business Partners:</strong> Partners who offer integrated services or promotions within our app.
                    <br />
                    <strong>Legal Authorities:</strong> When required by law or to protect our rights.
                    <br />
                    <strong>Other Users:</strong> When you choose to share information publicly within the app, such as through reviews or forum posts.
                </p>
                <p className="primary-text-privacy-headers">
                    5. Data Security
                </p>
                <p className="primary-text-privacy">
                    We employ robust security measures to protect your information. These measures include token-based authorization to secure access to your account and data, and we leverage MongoDB's built-in security features, such as role-based access control and encryption at rest, to safeguard the data stored in our database. Importantly, we do not store your passwords or other highly sensitive information directly. Instead, we rely exclusively on secure, token-based authentication.
                    <br />
                    <br />
                    While we are committed to maintaining the highest standards of data security, it's important to acknowledge that no method of transmission over the internet or electronic storage can guarantee absolute security. Therefore, while we strive to protect your personal information, we cannot ensure or warrant the absolute security of any information you transmit to us.
                </p>
                <p className="primary-text-privacy-headers">
                    6. Your Rights and Choices
                </p>
                <p className="primary-text-privacy">
                    You have the following rights regarding your data:
                    <br />
                    <br />
                    <strong>Access:</strong> You can request access to the personal information we hold about you.
                    <br />
                    <strong>Correction:</strong> You can request to correct any inaccuracies in your personal information.
                    <br />
                    <strong>Deletion:</strong> You can request to delete your personal information, subject to legal limitations.
                    <br />
                    <strong>Objection:</strong> You can object to the processing of your personal information in certain circumstances.
                    <br />
                    <strong>Data Portability:</strong> You can request to receive your personal information in a portable format.
                    <br />
                    <strong>Withdraw Consent:</strong> You can withdraw your consent to data processing where applicable.
                    <br />
                    <strong>Opt-out of Marketing:</strong> You can opt-out of receiving marketing communications from us.
                    <br />
                    <strong>Location Services:</strong> You can disable location services on your device.
                    <br />
                    <br />
                    To exercise these rights, please contact us at knowyourtrips@gmail.com.
                </p>
                <p className="primary-text-privacy-headers">
                    7. Children's Privacy
                </p>
                <p className="primary-text-privacy">
                    Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete it.
                </p>
                <p className="primary-text-privacy-headers">
                    8. Changes to This Privacy Policy
                </p>
                <p className="primary-text-privacy">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy in the app or sending an email notification. Your continued use of the app after such changes constitutes your acceptance of the new policy.
                </p>
                <p className="primary-text-privacy-headers">
                    9. Contact Us
                </p>
                <p className="primary-text-privacy">
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                    <br />
                    <br />
                    Know Your Trips
                    <br />
                    27, Pembroke Square,
                    <br />
                    Dublin, Ireland
                    <br />
                    knowyourtrips@gmail.com
                </p>
            </div>
        </div>
    );
};

export default Privacy;