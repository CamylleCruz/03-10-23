import pymysql

# Configuração da conexão com o banco de dados
config = {
    'host': 'localhost',
    'user': 'Camylle',
    'password': 'mylle150706',
    'database': 'stopots',
}

# Estabelece a conexão
connection = pymysql.connect(**config)

try:
    with connection.cursor() as cursor:
        # Executar consultas SQL e interagir com o banco de dados aqui
        cursor.execute("SELECT * FROM sua_tabela")
        result = cursor.fetchall()
        for row in result:
            print(row)
finally:
    # Não se esqueça de fechar a conexão quando terminar
    connection.close()
