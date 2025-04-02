import React, { useState } from "react";

const Privacy = () => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                <br />
                <br />
                <p className="primary-text-privacy">
                    By using our app, you agree to our <span className="terms-link" onClick={handleOpenModal}>Terms and Conditions</span>.
                </p>
                {
                    showModal && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <h2 className="primary-text-privacy-headers">Terms and Conditions</h2>
                                <p className="primary-text-privacy">
                                    <strong>Effective Date:</strong> 02/04/2025
                                    <br />
                                    <strong>Last Updated:</strong> 02/04/2025
                                    <br />
                                    <br />
                                    This End User License Agreement (“Agreement”) is a legal agreement between user and <strong>Know Your Trips (KYT)</strong>, governing your use of the  mobile application.
                                    <br />
                                    <br />
                                    By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree to these terms, do not use the App.
                                    <br />
                                    <br />
                                    <hr />
                                    <p className="primary-text-privacy-headers">
                                        1. License Grant
                                    </p>
                                    <p className="primary-text-privacy">
                                        KYT grants you a personal, non-transferable, non-exclusive, revocable license to download, install, and use the App solely for personal, non-commercial purposes in accordance with this Agreement.
                                    </p>
                                    <hr />
                                    <p className="primary-text-privacy-headers">
                                        2. User Conduct & Community Guidelines
                                    </p>
                                    <p className="primary-text-privacy">
                                        KYT is committed to providing a safe and respectful environment for all users. You agree <strong>not to post, share, or engage in</strong> the following:
                                        <br />
                                        <br />
                                        <ul>
                                            <li>Objectionable, abusive, harassing, or threatening content.</li>
                                            <li>Hate speech, discriminatory language, or bullying.</li>
                                            <li>Sexually explicit material or violence.</li>
                                            <li>Spam, scams, or misleading/fraudulent information.</li>
                                        </ul>
                                        <br />
                                        <strong>KYT enforces a zero-tolerance policy</strong> on such behavior. Violation may result in content removal, suspension, or permanent account deactivation.
                                    </p>
                                    <hr />
                                    <p className="primary-text-privacy-headers">
                                        3. Filtering & Moderation
                                    </p>
                                    <p className="primary-text-privacy">
                                        KYT implements moderation and filtering mechanisms to detect and reduce objectionable content. All user-generated content is subject to review and may be removed without notice if it violates this Agreement.
                                    </p>
                                    <hr />
                                    <p className="primary-text-privacy-headers">
                                        4. Reporting Objectionable Content
                                    </p>
                                    <p className="primary-text-privacy">
                                        Users can <strong>flag inappropriate or abusive content</strong> directly in the app using the “Report” feature. All reports will be reviewed within <strong>24 hours</strong>, and appropriate action will be taken, which may include content removal and user suspension.
                                    </p>
                                    <hr />
                                    <p className="primary-text-privacy-headers">
                                        5. Blocking Other Users
                                    </p>
                                    <p className="primary-text-privacy">
                                        Users may <strong>block other users</strong> from interacting with them within the app. Blocking prevents direct messages and hides content from the blocked user.
                                    </p>
                                    <hr />
                                    <p className="primary-text-privacy-headers">
                                        6. User Data & Privacy
                                    </p>
                                    <p className="primary-text-privacy">
                                        Use of the App is also governed by our <strong>Privacy Policy</strong> <a href="https://knowyourtrips.com/privacy" target="_blank" rel="noopener noreferrer">
                                            [https://knowyourtrips.com/privacy]
                                        </a>, which outlines how user data is collected, stored, and processed.
                                    </p>
                                    <hr />
                                    <p className="primary-text-privacy-headers">
                                        7. Termination
                                    </p>
                                    <p className="primary-text-privacy">
                                        We reserve the right to suspend or terminate your access to the App at any time, without prior notice, for any conduct that we believe violates this Agreement or is harmful to other users or KYT.
                                    </p>
                                    <hr />
                                    <p className="primary-text-privacy-headers">
                                        8. Disclaimer
                                    </p>
                                    <p className="primary-text-privacy">
                                        The App is provided “as is” without warranties of any kind. We do not guarantee uninterrupted or error-free operation, nor do we accept liability for loss of data, travel delays, or service interruptions.
                                    </p>
                                    <hr />
                                    <p className="primary-text-privacy-headers">
                                        9. Changes to this Agreement
                                    </p>
                                    <p className="primary-text-privacy">
                                        We may update this Agreement at any time. Changes will be posted in-app or on our website. Continued use of the App after changes means you accept the updated terms.
                                    </p>
                                    <hr />
                                    <p className="primary-text-privacy-headers">
                                        10. Contact Us
                                    </p>
                                    <p className="primary-text-privacy">
                                        If you have questions about this Agreement or need to report urgent issues, please contact us at:
                                    </p>
                                    📧 knowyourtrips@gmail.com
                                    <hr />
                                    <br />
                                    <strong>By continuing to use KYT, you acknowledge that you have read, understood, and agreed to the terms of this End User License Agreement.</strong>
                                </p>
                                <button className="close-button" onClick={handleCloseModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Privacy;