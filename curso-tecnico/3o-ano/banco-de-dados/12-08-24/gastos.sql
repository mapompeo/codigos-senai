DROP SCHEMA IF EXISTS GASTOS;
CREATE SCHEMA GASTOS;
USE GASTOS;

CREATE TABLE meses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mes VARCHAR(3) NOT NULL
);

CREATE TABLE entradas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mes_id INT,
    salario DECIMAL(10,2) DEFAULT 0,
    extras DECIMAL(10,2) DEFAULT 0,
    FOREIGN KEY (mes_id) REFERENCES meses(id)
);

CREATE TABLE saidas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mes_id INT,
    agua DECIMAL(10,2) DEFAULT 0,
    luz DECIMAL(10,2) DEFAULT 0,
    aluguel DECIMAL(10,2) DEFAULT 0,
    internet DECIMAL(10,2) DEFAULT 0,
    mercado DECIMAL(10,2) DEFAULT 0,
    gastos_diversos DECIMAL(10,2) DEFAULT 0,
    FOREIGN KEY (mes_id) REFERENCES meses(id)
);

CREATE TABLE saldos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mes_id INT,
    saldo_mes DECIMAL(10,2),
    saldo_cumulativo DECIMAL(10,2),
    FOREIGN KEY (mes_id) REFERENCES meses(id)
);

INSERT INTO meses (mes) VALUES 
('Jan'), ('Fev'), ('Mar'), ('Abr'), 
('Mai'), ('Jun'), ('Jul'), ('Ago'), 
('Set'), ('Out'), ('Nov'), ('Dez');

INSERT INTO entradas (mes_id, salario, extras) VALUES 
(1, 1800.00, 800.00), (2, 1800.00, 0.00), 
(3, 1800.00, 0.00), (4, 1800.00, 0.00),
(5, 1800.00, 0.00), (6, 1800.00, 0.00),
(7, 1800.00, 0.00), (8, 1800.00, 0.00),
(9, 1800.00, 0.00), (10, 1800.00, 0.00),
(11, 1800.00, 0.00), (12, 1800.00, 0.00);

INSERT INTO saidas (mes_id, agua, luz, aluguel, internet, mercado, gastos_diversos) VALUES 
(1, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00), 
(2, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00),
(3, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00),
(4, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00),
(5, -60.00, -150.00, -750.00, -100.00, -500.00, -1500.00),
(6, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00),
(7, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00),
(8, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00),
(9, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00),
(10, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00),
(11, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00),
(12, -50.00, -150.00, -750.00, -100.00, -500.00, 0.00);

INSERT INTO saldos (mes_id, saldo_mes, saldo_cumulativo)
SELECT 
    e.mes_id,
    (e.salario + e.extras + s.agua + s.luz + s.aluguel + s.internet + s.mercado + s.gastos_diversos) AS saldo_mes,
    @saldo_cumulativo := @saldo_cumulativo + (e.salario + e.extras + s.agua + s.luz + s.aluguel + s.internet + s.mercado + s.gastos_diversos) AS saldo_cumulativo
FROM 
    entradas e
JOIN 
    saidas s ON e.mes_id = s.mes_id
JOIN 
    (SELECT @saldo_cumulativo := 0) AS init;
