
import React from "react";

const RefundPolicy = () => {
    return (
        <div className="bg-gray-100 text-gray-900 p-6 min-h-screen">
        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center mb-6">Refund Policy</h1>

            <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold mb-2">Eligibility for refund</h2>
                <p>
                To be eligible for a refund based on the criteria mentioned below, a customer must have paid for a
                course(s) within the last 30 days from the date of claiming the refund.
                <br />
                Based on the criteria mentioned above, we'll consider parents or authorized guardians who have made
                payments on behalf of students as customers.
                </p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Conditions for refund</h2>
                <p>Based on the criteria mentioned above, mayuricaeducation.in considers refunds only for the following cases:</p>
                <ol className="list-decimal pl-5 space-y-1">
                <li>
                    If a customer has paid the full amount for a course and they do not receive access to the
                    mayuricaeducation.in website within 8 days from the date of purchase. Customer must ensure the following
                    conditions are met to claim a refund, provided:
                    <ul className="list-disc pl-5 space-y-1">
                    <li>Consumers must have used the correct login credentials to access their account on the website.</li>
                    <li>
                        Consumers must have coordinated with the mayuricaeducation.in team for resolution, especially if the
                        team reaches out before the 8-day period from the date of purchase.
                    </li>
                    </ul>
                </li>
                <li>
                    If a customer pays an amount that exceeds the price of the course listed on the official
                    mayuricaeducation.in website, they will receive a refund for the extra amount paid.
                </li>
                <li>
                    If the course teacher cancels 4 or more sessions in a row without giving any prior notice or
                    communicating through official channels such as Telegram, WhatsApp, or Email.
                </li>
                </ol>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Possible resolutions other than refund:</h2>
                <p>
                The total amount paid can be adjusted against other offerings if required, based on the assessment by
                mayuricaeducation.in, provided:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                <li>Concerns raised by the customer are deemed valid by mayuricaeducation.in.</li>
                <li>Concerns are deemed reasonable and/or true from both parties.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">No Refund is offered in the following cases:</h2>
                <ol className="list-decimal pl-5 space-y-1">
                <li>
                    If the customer has not paid the full amount and their access to the course is revoked due to this
                    reason, then they will not receive a refund for the amount they have already paid.
                </li>
                <li>
                    For 1:1 sessions, if a session is canceled due to an emergency from either the student/customer or the
                    teacher's end, and the student/customer is informed beforehand (within 24 hours), then no refund will be
                    granted.
                </li>
                </ol>
                <br />
                <p>Please Note:</p>
                <ol className="list-decimal pl-5 space-y-1">
                <li>If any token amount is paid, no refund will be processed on the same.</li>
                <li>
                    In case of self-prep courses, the consumer has to use a laptop or desktop for the best learning
                    experience (The course is not available on mobile or tablets).
                </li>
                <li>mayuricaeducation.in considers Telegram, WhatsApp & Email as official communication channels.</li>
                </ol>
            </div>
            </div>
        </div>
        </div>
    );
};

export default RefundPolicy;
