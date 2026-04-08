import math


def print_primes(limit):
    for n in range(2, limit):
        if n == 2:
            print(n)
            continue
        if n % 2 == 0:
            continue

        for i in range(3, int(math.sqrt(n)) + 1, 2):
            if n % i == 0:
                break
        else:
            print(n)


print_primes(10000000)
print("This was Python")
