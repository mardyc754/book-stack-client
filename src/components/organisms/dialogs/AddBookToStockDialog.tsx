import { useState } from 'react';

import { BookWithRelations } from '@/schemas/books';

import { useAddBookToStock } from '@/hooks/useAddBookToStock';

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

export function AddBookToStockDialog({ data }: ChangePriceDialogProps) {
  const [booksToAdd, setBooksToAdd] = useState(0);

  const { mutate: addToStock } = useAddBookToStock({
    bookId: data.id,
    quantity: booksToAdd
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PrimaryButton>Add to stock</PrimaryButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle>Add book to stock</DialogTitle>
          <DialogDescription>Select number of books to add</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Books to add
          </Label>
          <Input
            id="price"
            type="number"
            min={0}
            defaultValue={booksToAdd}
            className="col-span-3"
            onChange={(e) => {
              setBooksToAdd(Number(e.target.value) ?? 0);
            }}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <PrimaryButton
              onClick={() => {
                addToStock();
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
