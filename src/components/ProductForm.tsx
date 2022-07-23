import { ShoppingCart, Trash } from 'phosphor-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { Button } from './Button';
import { InputBox } from './InputBox';

import { useProducts } from '../hooks/useProducts';

export function ProductForm() {
  const { addProduct } = useProducts();

  const [canSubmit, setCanSubmit] = useState(false);
  const [name, setName] = useState<string | undefined>();
  const [price, setPrice] = useState<number | undefined>();

  useEffect(() => {
    if (name?.trim() && price && price >= 0.01) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [name, price]);

  function addProductHandle(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addProduct(name!.trim(), price!);
    event.currentTarget.reset();
  }

  function resetFormHandle() {
    setName(undefined);
    setPrice(undefined);
  }

  function changeNameHandle(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    setName(value);
  }

  function changePriceHandle(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    const number = value === '' ? undefined : Number(value);

    setPrice(number);
  }

  return (
    <form onSubmit={addProductHandle} onReset={resetFormHandle} className="flex flex-col gap-4 p-2">
      <InputBox
        label="Nome:"
        type="text"
        id="name"
        name="name"
        placeholder="Entre com o nome do produto"
        value={name}
        onChange={changeNameHandle}
      />

      <InputBox
        label="Preço:"
        prefix="R$"
        type="number"
        id="price"
        name="price"
        placeholder="Entre com o preço do produto"
        min={0.01}
        step={0.01}
        value={price}
        onChange={changePriceHandle}
      />

      <div className="flex justify-between items-center mt-2">
        <Button type="submit" theme="success" disabled={!canSubmit}>
          <ShoppingCart weight="fill" size={20} />
          Adicionar
        </Button>

        <Button type="reset" theme="danger">
          <Trash weight="fill" size={20} />
          Limpar
        </Button>
      </div>
    </form>
  );
}
