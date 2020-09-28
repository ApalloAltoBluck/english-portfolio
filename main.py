def divisible(a, b):

    if a > b:
        if a % b == 0:
            return True
        elif a < 1:
            return None
        elif b < 1:
            return None
        elif a == b:
            return True
        else:
            return False

    elif b > a:
        if b % a == 0:
            return True
        elif a < 1:
            return None
        elif b < 1:
            return None
        elif a == b:
            return True
        else:
            return False


def run_divisible():
    x = int(input('a: '))
    y = int(input('b: '))

    divisible(x, y)

    if None:
        print("Inputs must be positive integers!")

    if True:
        if x == y:
            print("a equals b!")
        elif x > y:
            if x % y == 0:
                print(x, "is evenly divisible by ", y)
            else:
                print(x, "is not evenly divisible by ", y)

        elif y > x:
            if y % x == 0:
                print(y, "is evenly divisible by ", x)
            else:
                print(y, "is not evenly divisible by ", x)


def is_triangle(x, y, z):

    if (0 > x) or (0 > y) or (0 > z):
        return None
    elif (x >= y + z) or (y >= x + z) or (z >= x + y):
        return False
    else:
        return True


def run_is_triangle():

    x = int(input('Side 1: '))
    y = int(input('Side 2: '))
    z = int(input('Side 3: '))

    is_triangle(x, y, z)

    if None:
        print("Triangles require sides of positive length!")

    elif is_triangle(x,y,z) == True:
        print("a, b and c can form a triangle.")

    elif is_triangle(x,y,z) == False:
        print("a, b and c can not form a triangle.")


def main():
    #run_divisible()
    run_is_triangle()


if __name__ == '__main__':
    main()
