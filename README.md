# Extension overview

Extension provide two features:

1. Generate `index.ts` file
2. Generate component folder template
3. Snippets for react/ts/tanstack-query


## Generate index.ts

This feature generate `index.ts` in same directoryt with export statement based on filename of activetab.

<u>e.g</u>: we are on `MyComponent.tsx` tab, and run feature. `index.ts` will be:

```
export { MyComponent } from './MyComponent';
```

`ctrl+shift+\` - keybinding to generate index.ts

## Generate component folder template

There are new option in explorer folder menu ```Generate component template```:

![alt text](public/generate_component_folder-1.png)

Witch will generate follow stucture:

![alt text](public/generate_component_folder-2.png)

## Snippets

### `uss` - useState snippet

```
const [|, set|] = useState<|>(|);
```

### `sfc` - stateless functional component snippet

```
export const |: React.FC = () => {
   return <> |</>;
};
```

### `isfc` - stateless functional component with interface snippet

```
interface |Props {}

export const |: React.FC<|Props>= () => {
    return <> | </>;
};
```

### `handle` - handler snippet

```
const handle| = (|) => {
    /*statement*/
}
```

### `icex` - index component export

```
export { | } from '.|';
```

### `iaex` - index all export

```
"export * from '.|';
```

### `funm` - Tanstack useMutate hook snippet

```
import { useMutation } from '@tanstack/react-query';

export function use|() {
    return useMutation({
        mutationKey: [|],
        mutationFn: (|) => {
           /*statement*/
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [|] });
        },
    });
}
```

### `funq` - Tanstack useQuery hook snippet

```
import { useQuery } from '@tanstack/react-query';

export function useAction(|) {
  return useQuery({
    queryKey: [|],
    queryFn: () => {
      /*statement*/
    },
  });
}
```
