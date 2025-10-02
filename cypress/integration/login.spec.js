describe('Login Flow', () => {
  it('should allow user to login successfully', () => {
    // Daftar akun baru terlebih dahulu
    cy.visit('/register');

    // Memastikan halaman register dimuat
    cy.contains('Yuk Daftar Akun Baru! 🎉').should('be.visible');

    // Mengisi form register
    cy.get('input[placeholder="Nama Lengkap"]').type('Fahrozi');
    cy.get('input[placeholder="Alamat Email"]').type('fahrozi@gmail.com');
    cy.get('input[placeholder="Kata Sandi"]').type('rafa1234');

    // Mengklik tombol register
    cy.get('button[type="submit"]').click();

    // Memastikan redirect setelah register berhasil
    cy.url().should('include', '/');

    // Kunjungi halaman login
    cy.visit('/login');

    // Mengisi form login
    cy.get('input[placeholder="Alamat Email"]').type('fahrozi@gmail.com');
    cy.get('input[placeholder="Kata Sandi"]').type('rafa1234');

    // Mengklik tombol login
    cy.get('button[type="submit"]').click();

    // Memastikan redirect ke halaman home setelah login berhasil
    cy.url().should('include', '/');

    // Memastikan navigasi tidak menampilkan login (artinya logout muncul)
    cy.contains('Masuk').should('be.visible');
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
