class Filme:
    def __init__(self, nome, ano, duracao):
        self.nome = nome.title()
        self.ano = ano 
        self.duracao = duracao 
        self.likes = 0

    def dar_likes(self):
        self.likes += 1

class Serie:
    def __init__(self, nome, ano, temporadas):
     self.nome = nome.title()
     self.ano = ano 
     self.temporadas = temporadas
     self.likes = 0

     def dar_likes(self):
        self.likes += 1

Vingadores = Filme('Vingadores - Guerra Infinita', 2018, 160)
print(f'Nome: {vingadores.nome} - ano: {Vingadores.ano} ' 
f'- duracao: {vingadores.duracao} - likes: {vingadores.likes}')

atlata = Serie('atlanta', 2018,2 )

print(f'Nome: {atlanta.nome} - Ano: {atlanta.ano} Temporadas: {atlanta.temporadas}'
f'- temporadas: {atlanta.temporadas} - likes: {atlanta.likes}')


