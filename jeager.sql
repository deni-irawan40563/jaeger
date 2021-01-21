-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Jan 2021 pada 08.09
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jeager`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `image` text DEFAULT NULL,
  `name` varchar(32) NOT NULL,
  `description` text NOT NULL,
  `post` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `image`, `name`, `description`, `post`) VALUES
(8, 'http://localhost:4800/uploads/image/2021-01-19T23_14_28.779Zpjq1cp9-b535648f0a940c15c61adeebab34c338_600x400.jpg', 'coba1', 'coba lagi ah semoga berhasil', '2021-01-19 23:14:28'),
(9, 'http://localhost:4800/uploads/image/2021-01-21T02_50_18.823Zpjq1cp9-b535648f0a940c15c61adeebab34c338_600x400.jpg,http://localhost:4800/uploads/image/2021-01-21T02_50_18.825Z0001.jpg', 'coba2', 'coba lagi ah semoga berhasil, sekarang multi image pt 8', '2021-01-21 02:50:18');

-- --------------------------------------------------------

--
-- Struktur dari tabel `roleid`
--

CREATE TABLE `roleid` (
  `id` int(11) NOT NULL,
  `roleName` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `roleid`
--

INSERT INTO `roleid` (`id`, `roleName`) VALUES
(1, 'superadmin'),
(2, 'director'),
(3, 'admin'),
(4, 'supervisor'),
(5, 'operator'),
(6, 'none');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `roleId` int(11) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` varchar(152) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `roleId`, `email`, `password`) VALUES
(1, 'superAdmin', 1, 'deni.irawan40563@gmail.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `roleid`
--
ALTER TABLE `roleid`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `roleid`
--
ALTER TABLE `roleid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
