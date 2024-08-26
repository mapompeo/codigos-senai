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
CREATE TABLE tipo_despesa (
  id int NOT NULL,
  tipo varchar(45) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE controle (
  id int NOT NULL,
  data date NOT NULL,
  valor decimal(10,2) NOT NULL,
  tp_desp int NOT NULL,
  PRIMARY KEY (id,tp_desp),
  KEY fk_controle_tipo_despesa_idx (tp_desp),
  CONSTRAINT fk_controle_tipo_despesa FOREIGN KEY (tp_desp) REFERENCES tipo_despesa (id)
);

INSERT INTO meses (mes) VALUES 
('Jan'), ('Feb'), ('Mar'), ('Apr'), 
('May'), ('Jun'), ('Jul'), ('Aug'), 
('Sep'), ('Oct'), ('Nov'), ('Dec');

INSERT INTO entradas (mes_id, salario, extras) VALUES
(1, 1800.00, 800.00), -- Jan
(2, 1800.00, 0.00),   -- Feb
(3, 1800.00, 0.00),   -- Mar
(4, 1800.00, 0.00),   -- Apr
(5, 1800.00, 0.00),   -- May
(6, 1800.00, 0.00),   -- Jun
(7, 1800.00, 0.00),   -- Jul
(8, 1800.00, 0.00),   -- Aug
(9, 1800.00, 0.00),   -- Sep
(10, 1800.00, 0.00),  -- Oct
(11, 1800.00, 0.00),  -- Nov
(12, 1800.00, 0.00);  -- Dec

INSERT INTO saidas (mes_id, agua, luz, aluguel, internet, mercado, gastos_diversos) VALUES
(1, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00),    -- Jan
(2, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00),    -- Feb
(3, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00),    -- Mar
(4, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00),    -- Apr
(5, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00),    -- May
(6, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00),    -- Jun
(7, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00),    -- Jul
(8, 50.00, 150.00, 750.00, 100.00, 500.00, 1500.00), -- Aug (Gastos Diversos maiores)
(9, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00),    -- Sep
(10, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00),   -- Oct
(11, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00),   -- Nov
(12, 50.00, 150.00, 750.00, 100.00, 500.00, 0.00);   -- Dec

INSERT INTO saldos (mes_id, saldo_mes, saldo_cumulativo) VALUES
(1, 1800.00 + 800.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 1050.00),   -- Jan
(2, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 1300.00),    -- Feb
(3, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 1550.00),    -- Mar
(4, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 1800.00),    -- Apr
(5, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 2050.00),    -- May
(6, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 2300.00),    -- Jun
(7, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 2550.00),    -- Jul
(8, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 1500.00), 550.00),  -- Aug
(9, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 1800.00),    -- Sep
(10, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 2050.00),   -- Oct
(11, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 2300.00),   -- Nov
(12, 1800.00 + 0.00 - (50.00 + 150.00 + 750.00 + 100.00 + 500.00 + 0.00), 2550.00);   -- Dec

-- SELECTS

-- 1
SELECT * FROM TIPO_DESPESA;

-- 2
SELECT COUNT(*) FROM ENTRADAS;

-- 3
SELECT SUM(SALARIO + EXTRAS) FROM ENTRADAS;

-- 4
SELECT SUM(AGUA + LUZ + ALUGUEL + INTERNET + MERCADO + GASTOS_DIVERSOS) FROM SAIDAS
WHERE SAIDAS.MES_ID = 8;

-- 5
SELECT SALDOS.SALDO_CUMULATIVO
FROM SALDOS
ORDER BY MES_ID DESC;