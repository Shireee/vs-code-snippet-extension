# Explanation

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
