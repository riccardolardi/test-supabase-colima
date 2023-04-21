# test-supabase-colima

Running Colima with this config:

```
PROFILE    STATUS     ARCH       CPUS    MEMORY    DISK     RUNTIME    ADDRESS
default    Running    aarch64    4       6GiB      60GiB    docker
```

And latest `supabase` and `@supabase/supabase-js`

Using `supabase` client will result in following error:

```
AuthRetryableFetchError: fetch failed
    at /Users/riccardolardi/Code/test-supabase-colima/node_modules/@supabase/gotrue-js/dist/main/lib/fetch.js:30:16
    at Generator.next (<anonymous>)
    at /Users/riccardolardi/Code/test-supabase-colima/node_modules/@supabase/gotrue-js/dist/main/lib/fetch.js:8:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/riccardolardi/Code/test-supabase-colima/node_modules/@supabase/gotrue-js/dist/main/lib/fetch.js:4:12)
    at handleError (/Users/riccardolardi/Code/test-supabase-colima/node_modules/@supabase/gotrue-js/dist/main/lib/fetch.js:27:40)
    at /Users/riccardolardi/Code/test-supabase-colima/node_modules/@supabase/gotrue-js/dist/main/lib/fetch.js:87:35
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  __isAuthError: true,
  status: 0
}
```
