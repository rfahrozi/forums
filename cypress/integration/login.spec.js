describe('Login Flow', () => {
  it('should allow user to login successfully', () => {
    // Mengunjungi halaman login
    cy.visit('/login');

    // Memastikan halaman login dimuat
    cy.contains('Masuk ke Akunmu 😊').should('be.visible');

    // Mengisi form login
    cy.get('input[placeholder="Alamat Email"]').type('fahrozi@gmail.com');
    cy.get('input[placeholder="Kata Sandi"]').type('rafa1234');

    // Mengklik tombol login
    cy.get('button[type="submit"]').click();

    // Memastikan redirect ke halaman home setelah login berhasil
    cy.url().should('include', '/');

    // Memastikan navigasi menampilkan logout
    cy.contains('Keluar').should('be.visible');
  });

  it('should show error on invalid login', () => {
    cy.visit('/login');

    cy.get('input[placeholder="Alamat Email"]').type('fahrozi@gmail.com');
    cy.get('input[placeholder="Kata Sandi"]').type('wrongpassword');

    cy.get('button[type="submit"]').click();

    // Asumsi error message ditampilkan
    cy.contains('email or password is wrong').should('be.visible');
  });
});
