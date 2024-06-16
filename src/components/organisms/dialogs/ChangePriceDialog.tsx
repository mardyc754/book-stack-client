import { useState } from 'react';

import { BookWithRelations } from '@/schemas/books';

import { useChangeBookPrice } from '@/hooks/useChangeBookPrice';

import { PrimaryButton } from '@/components/atoms/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ChangePriceDialogProps {
  data: BookWithRelations;
}

export function ChangePriceDialog({ data }: ChangePriceDialogProps) {
  const [newPrice, setNewPrice] = useState(data.price);

  const { mutate: changePrice } = useChangeBookPrice({
    bookId: data.id,
    newPrice
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PrimaryButton>Change price</PrimaryButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change price</DialogTitle>
          <DialogDescription>Set a new price for the book</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            New price
          </Label>
          <Input
            id="price"
            defaultValue={newPrice}
            className="col-span-3"
            onChange={(e) => {
              setNewPrice(e.target.value);
            }}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <PrimaryButton
              onClick={() => {
                changePrice();
              }}
            >
              Save changes
            </PrimaryButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
