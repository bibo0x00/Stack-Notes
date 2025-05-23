const emailBody = (token) => {
  return `
    <h2>Confirm your email</h2>
    <p>Click the link below to verify your email address:</p>
    <a href="http://localhost:3000/api/auth/verifyEmail/${token}">
      Confirm Email
    </a>
    <p>This link will expire in 1 hour.</p>
  `
}

export { emailBody }
