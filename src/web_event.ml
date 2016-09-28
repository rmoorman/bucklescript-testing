(* type target = <
  value : string Js.undefined [@bs.get];
> Js.t *)

type 'node t = <
  target : 'node Js.undefined [@bs.get];
  keyCode : int [@bs.get];
> Js.t

type 'node cb = 'node t -> unit [@bs]

type options = bool (* false | true (* TODO:  Define a javascript record as another option *) *)
