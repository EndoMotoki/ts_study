type Spicy = {
    name: string;
    level: number;
}

type Mild = {
    name: string;
}

function isSpicy(curry: Spicy | Mild): curry is Spicy {
    return "level" in curry;
}

