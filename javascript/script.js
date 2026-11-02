    // ENQUIRY FORM
    // Validates customer information and sends the enquiry
    // to the LengthHairCare team using Web3Forms.

    const enquiryForm = document.querySelector('#enquiry-form');

    if (enquiryForm) {

        // Defines the validation rules for each enquiry field.
        const enquiryRules = {

            name: (v) =>
                v.trim().length < 2
                    ? 'Please enter your full name (at least 2 letters).'
                    : '',

            email: (v) =>
                !v.trim()
                    ? 'Please enter your email address.'
                    : !emailPattern.test(v.trim())
                        ? 'Please enter a valid email address.'
                        : '',

            interest: (v) =>
                !v
                    ? 'Please choose a product or service.'
                    : '',

            porosity: (v) =>
                !v
                    ? 'Please choose a porosity option.'
                    : '',

            message: (v) =>
                v.trim().length < 10
                    ? 'Please write at least 10 characters.'
                    : ''

        };

        // Checks an individual field and displays its validation message.
        const checkEnquiryField = (name) => {

            const field = enquiryForm.elements[name];

            const error = document.querySelector(
                `#enquiry-error-${name}`
            );

            const problem = enquiryRules[name](field.value);

            error.textContent = problem;

            error.hidden = !problem;

            field.setAttribute(
                'aria-invalid',
                problem ? 'true' : 'false'
            );

            return !problem;
        };

        // Rechecks fields when customers edit, change or leave them.
        Object.keys(enquiryRules).forEach((name) => {

            const field = enquiryForm.elements[name];

            field.addEventListener('input', () => {

                if (field.getAttribute('aria-invalid') === 'true') {
                    checkEnquiryField(name);
                }

            });

            field.addEventListener('change', () => {
                checkEnquiryField(name);
            });

            field.addEventListener('blur', () => {
                checkEnquiryField(name);
            });

        });

        // Handles the enquiry form submission.
        enquiryForm.addEventListener('submit', async (event) => {

            event.preventDefault();

            const result = document.querySelector('#enquiry-result');

            const submitButton = enquiryForm.querySelector(
                'button[type="submit"]'
            );

            result.hidden = true;

            // Validate all fields before attempting to send the enquiry.
            const results = Object.keys(enquiryRules).map(
                checkEnquiryField
            );

            // If validation fails, focus on the first incorrect field.
            if (results.includes(false)) {

                const firstBad = Object.keys(enquiryRules).find(
                    (name) =>
                        enquiryForm.elements[name].getAttribute(
                            'aria-invalid'
                        ) === 'true'
                );

                enquiryForm.elements[firstBad].focus();

                return;
            }

            // Collect the customer's submitted information.
            const data = new FormData(enquiryForm);

            const name = String(data.get('name')).trim();

            const email = String(data.get('email')).trim();

            const interest = String(data.get('interest'));

            const porosity = String(data.get('porosity'));

            const customerMessage = String(
                data.get('message')
            ).trim();

            // Prepare a clear subject line for the business inbox.
            const subject = `[LengthHairCare] Product enquiry: ${interest}`;

            // Combine the customer's selections into an email message.
            const message = `
Customer name: ${name}

Customer email: ${email}

Product or service of interest: ${interest}

Hair porosity: ${porosity}

Customer's message:
${customerMessage}
            `;

            // Prevent duplicate submissions while the email is being sent.
            submitButton.disabled = true;

            submitButton.textContent = 'Sending enquiry...';

            try {

                // Send the enquiry to the business through Web3Forms.
                const response = await fetch(
                    'https://api.web3forms.com/submit',
                    {
                        method: 'POST',

                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },

                        body: JSON.stringify({

                            // Insert your newly generated Web3Forms key here.
                            access_key: 'YOUR_NEW_WEB3FORMS_ACCESS_KEY',

                            name: name,

                            email: email,

                            subject: subject,

                            message: message

                        })
                    }
                );

                // Read the response returned by the email service.
                const json = await response.json();

                // Treat unsuccessful submissions as errors.
                if (!response.ok || !json.success) {
                    throw new Error('Enquiry submission failed.');
                }

                // Generate a personalised confirmation for the customer.
                const friendlyPorosity = {
                    low: 'low',
                    medium: 'medium',
                    high: 'high'
                }[porosity];

                const productResponse =
                    interest === 'Hair Growth Oil'
                        ? 'The Hair Growth Oil is listed at R350. We can confirm current availability when we reply.'
                        : `Thanks for asking about ${escapeHTML(interest)}. Price and availability will be confirmed by our team.`;

                const porosityResponse = friendlyPorosity
                    ? `Based on your ${friendlyPorosity} porosity selection, our team can also suggest how to introduce it into a routine.`
                    : 'Our team can help you explore a suitable starting point for your hair routine.';

                // Display confirmation only after successful email delivery.
                result.innerHTML = `
                    <strong>Thank you, ${escapeHTML(name)}.</strong>
                    Your enquiry has been sent successfully.
                    ${productResponse}
                    ${porosityResponse}
                    We will get back to you soon.
                `;

                // Clear the form after successful submission.
                enquiryForm.reset();

            } catch (error) {

                // Display an error if the email service cannot process the enquiry.
                result.textContent =
                    'Sorry, your enquiry could not be sent. Please try again or contact us through our contact page.';

            }

            // Make the response visible and accessible to the customer.
            result.hidden = false;

            result.focus();

            // Restore the submit button for future enquiries.
            submitButton.disabled = false;

            submitButton.textContent = 'Get a recommendation';

        });

    }