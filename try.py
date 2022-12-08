height = [1,2,43,21,5]
def add(n):
    return n+1
print(height)
height = map(add,height)
print(list(height))





""" height = int(input())
half = height//2
starting = 1
print(half)
for i in range(height//2 + 1):
    space  = ' ' * half
    astrix = "*" * starting
    print(space,'[',astrix,']',sep='')
    half -= 1
    starting += 2
space = ' ' * (height//2-1)
for i in range(2):
    print(space,"]","[") """