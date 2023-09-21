create table computador(
cod numeric(3) not null primary key,
marca varchar(30) not null
);

insert into computador (cod, marca) VALUES (123,'positivo');
insert into computador (cod, marca) VALUES (321,'acer');


create table pessoa (
cpf numeric(11) not null primary key,
nome varchar(100) not null,
cod numeric(3)
);

insert into pessoa (cpf, nome, cod) VALUES (12345678911,'Matheus', 321);




alter table pessoa add constraint fk_pes_comp
foreign key (cod) REFERENCES computador (cod);

--select * from computador;
--select * from pessoa;