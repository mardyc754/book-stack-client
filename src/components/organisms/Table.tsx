import { BookWithRelations } from '@/graphql/schemas/common';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useMemo } from 'react';

import { Button } from '../atoms/Button';

const exampleData = [
  {
    id: 1,
    title: 'The Illuminati',
    category: 'Fiction , Science Fiction , General',
    authors: 'Larry Burkett',
    publisher: 'Thomas Nelson',
    price: '5.29 $',
    publicationDate: '10/4/2004',
    pageCount: 352,
    ISBN: '1595540016',
    description: `The year is 2001 and the world is on the brink of economic collapse as the Illuminati, a deadly secret organization, succeeds in placing one of their people in the office of the presidency of the United States, gaining control of world events.Have John Elder and Randy Cross read the "signs of the times" soon enough to expose theIlluminatiand thwart their diabolical plan? Or will this organization and its leaders be hailed as the world's political saviors?`
  },
  {
    id: 2,
    title: 'Songbook',
    category: 'Music , Instruction & Study , Songwriting',
    authors: 'Nick Hornby',
    publisher: 'Riverhead Books',
    price: '5.29 $',
    publicationDate: '10/7/2003',
    pageCount: 207,
    ISBN: '1573223565',
    description:
      '“All I have to say about these songs is that I love them, and want to sing along to them, and force other people to listen to them, and get cross when these other people don’t like them as much as I do.” —Nick Hornby, from Songbook  A wise and hilarious collection from the bestselling'
  },
  {
    id: 3,
    title: 'Fever Pitch',
    category: 'Sports & Recreation , Soccer',
    authors: 'Nick Hornby',
    publisher: 'Riverhead Books',
    price: '4.99 $',
    publicationDate: '3/1/1998',
    pageCount: 247,
    ISBN: '1573226882',
    description:
      'A brilliant memoir from the beloved, bestselling author of Funny Girl, High Fidelity and About A Boy. In America, it is soccer. But in Great Britain, it is the real football. No pads, no prayers, no prisoners. And that’s before the players even take the field.Nick Hornby has been a football fan since the moment he was conceived. Call it predestiny. Or call it preschool. Fever Pitch is his tribute to a lifelong obsession. Part autobiography, part comedy, part incisive analysis of insanity, Hornby’s award-winning memoir captures the fever pitch of fandom—its agony and ecstasy, its community, its defining role in thousands of young men’s coming-of-age stories. Fever Pitch is one for the home team. But above all, it is one for everyone who knows what it really means to have a losing season.'
  },
  {
    id: 4,
    title: 'High Fidelity',
    category: 'Fiction , Media Tie-In',
    authors: 'Nick Hornby',
    publisher: 'Riverhead Books',
    price: '5.29 $',
    publicationDate: '3/1/2000',
    pageCount: 323,
    ISBN: '1573228214',
    description:
      'Now a major motion picture from Touchstone Pictures.   Rob is a pop music junkie who runs his own semi-failing record store. His girlfriend, Laura, has just left him for the guy upstairs, and Rob is both miserable and relieved. After all, could he have spent his life with someone who has a bad record collection? Rob seeks refuge in the company of the offbeat clerks at his store, who endlessly review their top five films (Reservoir Dogs...); top five Elvis Costello songs ("Alison"...); top five episodes of Cheers (the one where Woody sang his stupid song to Kelly...). Rob tries dating a singer whose rendition of "Baby, I Love Your Way" makes him cry. But maybe it\'s just that he\'s always wanted to sleep with someone who has a record contract. Then he sees Laura again. And Rob begins to think (awful as it sounds) that life as an episode of thirtysomething, with all the kids and marriages and barbecues and k.d. lang CD\'s that this implies, might not be so bad.'
  },
  {
    id: 5,
    title: 'About a boy',
    category: 'Fiction , Literary',
    authors: 'Nick Hornby',
    publisher: 'Penguin',
    price: '4.99 $',
    publicationDate: '4/4/2002',
    pageCount: 278,
    ISBN: '0141007338',
    description:
      'A wise, hilarious novel from the beloved, award-winning author of Funny Girl, High Fidelity and A Long Way Down. Will Freeman may have discovered the key to dating success: If the simple fact that they were single mothers meant that gorgeous women – women who would not ordinarily look twice a Will – might not only be willing, but enthusiastic about dating him, then he was really onto something. Single mothers – bright, attractive, available women – thousands of them, were all over London. He just had to find them. SPAT: Single Parents – Alone Together. It was a brilliant plan. And Will wasn’t going to let the fact that he didn’t have a child himself hold him back. A fictional two-year-old named Ned wouldn’t be the first thing he’d invented. And it seems to go quite well at first, until he meets an actual twelve-year-old named Marcus, who is more than Will bargained for…'
  },
  {
    id: 6,
    title: 'Dreamland',
    category: 'Young Adult Fiction , Family , Siblings',
    authors: 'Sarah Dessen',
    publisher: 'Speak',
    price: '5.29 $',
    publicationDate: '5/11/2004',
    pageCount: 250,
    ISBN: '0142401757',
    description: `When Caitlin first meets Rogerson Biscoe, he seems to be everything she wants him to be. He's handsome, sensitive, and more than a bit mysterious. And before long, Rogerson has cast a spell over Caitlin. A spell that keeps her in a dreamland from which she can't seem to break free-even when the dreams turn into nightmares. Beautifully crafted, with a vivid plot and sharply drawn characters, this is a powerful and intensely compelling`
  },
  {
    id: 7,
    title: 'Maximum City: Bombay Lost and Found',
    category: 'History , Civilization',
    authors: 'Suketu Mehta',
    publisher: 'Vintage',
    price: '10.99 $',
    publicationDate: '9/27/2005',
    pageCount: 542,
    ISBN: '0375703403',
    description: `A brilliantly illuminating portrait of Bombay and its people–a book as vast, diverse, and rich in experience, incident, and sensation as the city itself–from an award-winning Indian-American fiction writer and journalist.A native of Bombay, Suketu Mehta gives us a true insider’s view of this stunning city, bringing to his account a rare level of insight, detail, and intimacy. He approaches the city from unexpected angles–taking us into the criminal underworld of rival Muslim and Hindu gangs who wrest control of the city’s byzantine political and commercial systems . . . following the life of a bar dancer who chose the only life available to her after a childhood of poverty and abuse . . . opening the doors onto the fantastic, hierarchical inner sanctums of Bollywood . . . delving into the stories of the countless people who come from the villages in search of a better life and end up living on the sidewalks–the essential saga of a great city endlessly played out.Through it all–as each individual story unfolds–we hear Mehta’s own story: of the mixture of love, frustration, fascination, and intense identification he feels for and with Bombay, as he tries to find home again after twenty-one years abroad. And he makes clear that Bombay–the world’s largest city–is a harbinger of the vast megalopolises that will redefine the very idea of “the city” in the near future.Candid, impassioned, funny, and heartrending, Maximum City is a revelation of an ancient and ever-changing world.`
  },
  {
    id: 8,
    title: 'First They Killed My Father: A Daughter of Cambodia Remembers',
    category: 'Biography & Autobiography , General',
    authors: 'Loung Ung',
    publisher: 'Harper Perennial',
    price: '4.99 $',
    publicationDate: '4/4/2006',
    pageCount: 238,
    ISBN: '0060856262',
    description: `Until the age of five, Loung Ung lived in Phnom Penh, one of seven children of a high-ranking government official.She was a precocious child who loved the open city markets, fried crickets, chicken fights, and sassing her parents. When Pol Pot's Khmer Rouge army stormed into Phnom Penh in April 1975, Ung's family was forced to flee their home and hide their previous life of privilege. Eventually, they dispersed in order to survive. Loung was trained as a child soldier in a work camp for orphans while her other siblings were sent to labor camps. Only after the Vietnamese destroyed the Khmer Rouge were Loung and her surviving siblings slowly reunited.Bolstered by the shocking bravery of one brother and sustained by her sister's gentle kindness amid brutality, Loung forged ahead to create a courageous new life. Harrowing yet hopeful, insightful and compelling, this family's story is truly unforgettable.`
  },
  {
    id: 9,
    title: 'The Grapes of Wrath',
    category: 'Fiction , Literary',
    authors: 'John Steinbeck/Robert DeMott/Mick Wiggins',
    publisher: 'Penguin Classics',
    price: '5.29 $',
    publicationDate: '3/28/2006',
    pageCount: 464,
    ISBN: '0143039431',
    description: `Depicts the hardships and suffering endured by the Joads as they journey from Oklahoma to California during the Depression`
  },
  {
    id: 10,
    title: 'The Adventures of Sherlock Holmes',
    category: '',
    authors: 'Arthur Conan Doyle',
    publisher: 'Geddes & Grosset',
    price: '5.29 $',
    publicationDate: '1/1/2004',
    pageCount: 189,
    ISBN: '1842055062',
    description: ''
  }
];

interface TableProps {
  data: BookWithRelations[];
}

export const Table = ({ data }: TableProps) => {
  const columns = useMemo<ColumnDef<BookWithRelations>[]>(
    () => [
      {
        id: 'id',
        header: 'ID',
        cell: ({ row }) => <div>{row.id}</div>
      },
      {
        id: 'title',
        header: 'Title',
        accessorFn: (row) => row.title,
        cell: (info) => info.getValue()
      },
      {
        id: 'category',
        header: 'Category',
        accessorFn: (row) => row.categories.map(({ name }) => name).join(', '),
        cell: (info) => info.getValue()
      },
      {
        id: 'authors',
        header: 'Authors',
        accessorFn: (row) =>
          row.authors
            .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
            .join(', '),
        cell: (info) => info.getValue()
      },
      {
        id: 'publisher',
        header: 'Publisher',
        accessorFn: (row) => row.publisher.name,
        cell: (info) => info.getValue()
      },
      {
        id: 'price',
        header: 'Price',
        accessorFn: (row) => `${row.price} $`,
        cell: (info) => info.getValue()
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex gap-2">
            <Button>Add to basket</Button>
          </div>
        )
      }
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
