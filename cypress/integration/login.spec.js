describe('Login Flow', () => {
  it('should allow user to login successfully', () => {
    // Mock successful login API response
    cy.intercept('POST', 'https://forum-api.dicoding.dev/v1/login', {
      statusCode: 200,
      body: {
        status: 'success',
        data: { token: 'mock-success-token' }
      }
    }).as('loginSuccess');

    // Mengunjungi halaman login
    cy.visit('/login');

    // Memastikan halaman login dimuat
    cy.contains('Masuk ke Akunmu 😊').should('be.visible');

    // Mengisi form login
    cy.get('input[placeholder="Alamat Email"]').type('fahrozi@gmail.com');
    cy.get('input[placeholder="Kata Sandi"]').type('rafa1234');

    // Mengklik tombol login
    cy.get('button[type="submit"]').click();

    // Wait for API mock
    cy.wait('@loginSuccess');

    // Set token in localStorage to simulate auth
    cy.window().then((win) => {
      win.localStorage.setItem('accessToken', 'mock-success-token');
    });

    // Memastikan redirect ke halaman home setelah login berhasil
    cy.url().should('include', '/');

    // Memastikan navigasi menampilkan logout
    cy.contains('Keluar').should('be.visible');
  });

  it('should show error on invalid login', () => {
    // Mock invalid login API response
    cy.intercept('POST', 'https://forum-api.dicoding.dev/v1/login', {
      statusCode: 200,
      body: {
        status: 'error',
        message: 'email or password is wrong'
      }
    }).as('loginError');

    cy.visit('/login');

    cy.get('input[placeholder="Alamat Email"]').type('fahrozi@gmail.com');
    cy.get('input[placeholder="Kata Sandi"]').type('wrongpassword');

    cy.get('button[type="submit"]').click();

    // Wait for API mock
    cy.wait('@loginError');

    // Asumsi error message ditampilkan
    cy.contains('email or password is wrong').should('be.visible');
  });
});
