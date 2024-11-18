interface Payment {
    id: number;
    sum: number;
    from: string;
    to: string;
}

type PaymentNoId = Omit<Payment, 'id'>;
type PaymentRequisits = Pick<Payment, 'from' | 'to'>;

type ExtractEx = Extract<'from' | 'to' | Payment, string>;
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>;